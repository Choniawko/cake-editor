import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCategoryFields {
    name?: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Text;
}

export type TypeCategorySkeleton = EntrySkeletonType<TypeCategoryFields, "category">;
export type TypeCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCategorySkeleton, Modifiers, Locales>;
