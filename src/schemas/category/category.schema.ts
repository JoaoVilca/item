import mongoose, { Schema, Mongoose, Document, Model } from 'mongoose';
import CategoryAttributes from './Category.entity';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';

export type CategoryModelExt<T> = ModelExt<T>;

export type CategoryDocument = Document & CategoryAttributes;

export const ShortCategorySchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  name: String,
  hasSubCategory: Boolean,
  parentCode: String,
  isLuxury: Boolean,
  image: String
})
export const CategorySchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, require: true },
    name: { type: String, required: true },
    hasSubCategory: { type: Boolean, require: true, default: false },
    parentCode: { type: String, require: false },
    isLuxury: { type: Boolean, require: true, default: false },
    image: { type: String, require: true },
    active: { type: String, default: '1' },
    _deletedAt: { type: Date },
    _deleted: { type: Boolean, default: false },
    createdBy: String,
    updatedBy: String,
    enabled: { type: Boolean, default: true },
    alphaCode: { type: String },
    alphaCode2: { type: String },
    numericCode: { type: Number },
  },
  { timestamps: true },
);

CategorySchema.statics.getDocuments = CommonSchemaClass.getDocuments;
CategorySchema.statics.getDocument = CommonSchemaClass.getDocument;
CategorySchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
CategorySchema.statics.patchDocumentsBulk = CommonSchemaClass.patchDocumentsBulk;
CategorySchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
CategorySchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
CategorySchema.statics.patchDocumentsBulk = CommonSchemaClass.updateOneWithQuery;

const Category = (mongoose: Mongoose) =>
  mongoose.model<CategoryDocument>('Category', CategorySchema, 'category') as Model<
    CategoryDocument,
    Record<string, unknown>
  >;

export default Category;
