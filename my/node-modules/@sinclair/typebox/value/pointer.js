"use strict";
/*--------------------------------------------------------------------------

@sinclair/typebox/value

The MIT License (MIT)

Copyright (c) 2022 Haydn Paterson (sinclair) <haydn.developer@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValuePointer = void 0;
/** RFC6901 JsonPointer */
var ValuePointer;
(function (ValuePointer) {
    function Format(pointer) {
        if (pointer === '/')
            return [''];
        const split = pointer.split('/');
        const filter = split.filter((part) => part.length > 0);
        return filter.map((part) => part.replace(/~0/g, `~`).replace(/~1/g, `/`));
    }
    /** Sets the value at the given pointer. If the value at the pointer does not exist it is created. */
    function Set(value, pointer, update) {
        if (pointer === '')
            throw Error('Cannot set root value');
        const path = Format(pointer);
        let current = value;
        while (path.length > 1) {
            const next = path.shift();
            if (current[next] === undefined)
                current[next] = {};
            current = current[next];
        }
        current[path.shift()] = update;
    }
    ValuePointer.Set = Set;
    /** Deletes a value at the given pointer. */
    function Delete(value, pointer) {
        if (pointer === '')
            throw Error('Cannot delete root value');
        let current = value;
        const path = Format(pointer);
        while (path.length > 1) {
            const next = path.shift();
            if (current[next] === undefined)
                return;
            current = current[next];
        }
        if (Array.isArray(current)) {
            const index = parseInt(path.shift());
            return current.splice(index, 1);
        }
        else {
            const key = path.shift();
            delete current[key];
        }
    }
    ValuePointer.Delete = Delete;
    /** True if a value exists at the given pointer */
    function Has(value, pointer) {
        if (pointer === '')
            return true;
        let current = value;
        const path = Format(pointer);
        while (path.length > 1) {
            const next = path.shift();
            if (current[next] === undefined)
                return false;
            current = current[next];
        }
        return current[path.shift()] !== undefined;
    }
    ValuePointer.Has = Has;
    /** Gets the value at the given pointer */
    function Get(value, pointer) {
        if (pointer === '')
            return value;
        let current = value;
        const path = Format(pointer);
        while (path.length > 1) {
            const next = path.shift();
            if (current[next] === undefined)
                return undefined;
            current = current[next];
        }
        return current[path.shift()];
    }
    ValuePointer.Get = Get;
})(ValuePointer = exports.ValuePointer || (exports.ValuePointer = {}));
