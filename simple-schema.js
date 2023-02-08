import SimpleSchema, {schemaDefinitionOptions} from "simpl-schema"
import regEx from './lib/regExp'

// ... changes, patches, etc.
SimpleSchema.RegEx = regEx

// configure message box integration
SimpleSchema.setDefaultMessages = () => {
  globalThis.simpleSchemaGlobalConfig = {
    getErrorMessage(error, label) {
      console.debug(error, label)
    }
  };
}

export default SimpleSchema
