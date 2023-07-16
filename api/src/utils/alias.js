import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

let alias="chau mundo mundo"
const currentFilePath = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(currentFilePath), "../../");
const upload = path.resolve(path.dirname(currentFilePath), "../../upload");




export {root,upload}