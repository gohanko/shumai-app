import resolve from 'resolve';
import path from 'path';

/**
 * Requires file relative to @see root or process.cwd() if root is not supplied.
 * 
 * @name requireModule
 * @function
 * @param {String} module name of an installed module or path to a module to be required.
 * @param {String=} root defaults to current working directory 
 * @return {Object} the result of requiring the module
 */

const requireModule = (module: string, root?: string) => {
    root = root || process.cwd(); 
    return (/^[./]/).test(module)
        ? require(path.resolve(root, module))
        : require(resolve.sync(module, { basedir: root }));
}

export default requireModule;