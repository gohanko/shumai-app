// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{
    api::process::{Command, CommandEvent},
    Manager,
};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let window = app.get_window("main").unwrap();
            tauri::async_runtime::spawn(async move {
                let (mut rx, mut child) = Command::new_sidecar("rpc")
                .expect("failed to setup `app` sidecar")
                .spawn()
                .expect("Failed to spawn packaged node");

                let mut i = 0;
                while let Some(event) = rx.recv().await {
                if let CommandEvent::Stdout(line) = event {
                    window
                    .emit("message", Some(format!("'{}'", line)))
                    .expect("failed to emit event");
                    i += 1;
                    if i == 4 {
                    child.write("message from Rust\n".as_bytes()).unwrap();
                    i = 0;
                    }
                }
                }
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
