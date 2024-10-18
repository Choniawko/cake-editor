import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeOrderFields {
    customerName?: EntryFieldTypes.Text;
    customerContact?: EntryFieldTypes.Text;
    cakeDesign?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
    quantity?: EntryFieldTypes.Number;
    deliveryDate?: EntryFieldTypes.Date;
}

export type TypeOrderSkeleton = EntrySkeletonType<TypeOrderFields, "order">;
export type TypeOrder<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeOrderSkeleton, Modifiers, Locales>;
