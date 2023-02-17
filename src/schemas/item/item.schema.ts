import mongoose, { Schema, Mongoose, Document, Model } from 'mongoose';
import ItemAttributes from './Item.entity';
import CommonSchemaClass, { ModelExt } from '../../methods/shared.methods.class';
import { ShortCategorySchema } from '../category/category.schema';

export type ItemModelExt<T> = ModelExt<T>;

export type ItemDocument = Document & ItemAttributes;

export const ShortItemSchema = new Schema({
  _id: Schema.Types.ObjectId,
  code: String,
  name: String,
  description: Boolean,
  category: ShortCategorySchema,
  price: Boolean,
  discount: String,
  packaging: Object,
  image: Array,
  typeItem: String,
  useVariant: Boolean,
  perishable: Boolean,
  variants: Array,
  SKU: String,
  barCode: String,
  stock: Number,
  warehouse: Object
})
export const ItemSchema: Schema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    code: { type: String, require: true },
    name: { type: String, required: true },
    description: { type: Boolean, default: false },
    category: { type: ShortCategorySchema, require: true },
    price: { type: Boolean, default: false },
    discount: { type: String, require: true },
    packaging: { type: Object, require: true },
    image: { type: Array, require: false },
    typeItem: { type: String, require: true },
    useVariant: { type: Boolean, default: false },
    perishable: { type: Boolean, default: false },
    variants: { type: Array, require: true },
    SKU: { type: String, require: true },
    barCode: { type: String, require: true },
    stock: { type: Number, default: false },
    warehouse: { type: Object, require: true },
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

ItemSchema.statics.getDocuments = CommonSchemaClass.getDocuments;
ItemSchema.statics.getDocument = CommonSchemaClass.getDocument;
ItemSchema.statics.getDocumentsCount = CommonSchemaClass.getDocumentsCount;
ItemSchema.statics.patchDocumentsBulk = CommonSchemaClass.patchDocumentsBulk;
ItemSchema.statics.getDocumentsWithCount =
  CommonSchemaClass.getDocumentsWithCount;
ItemSchema.statics.patchDocumentsBulk = CommonSchemaClass.createGenId;
ItemSchema.statics.patchDocumentsBulk = CommonSchemaClass.updateOneWithQuery;

const Item = (mongoose: Mongoose) =>
  mongoose.model<ItemDocument>('Item', ItemSchema, 'item') as Model<
    ItemDocument,
    Record<string, unknown>
  >;

export default Item;
