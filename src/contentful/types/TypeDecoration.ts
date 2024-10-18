import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDecorationFields {
    name?: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeDecorationSkeleton = EntrySkeletonType<TypeDecorationFields, "decoration">;
export type TypeDecoration<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDecorationSkeleton, Modifiers, Locales>;
