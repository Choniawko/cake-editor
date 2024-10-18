import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCakeDesignFields {
    name?: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
    price?: EntryFieldTypes.Number;
    categories?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeCakeDesignSkeleton = EntrySkeletonType<TypeCakeDesignFields, "cakeDesign">;
export type TypeCakeDesign<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCakeDesignSkeleton, Modifiers, Locales>;
