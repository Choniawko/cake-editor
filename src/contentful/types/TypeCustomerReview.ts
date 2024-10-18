import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCustomerReviewFields {
    rating?: EntryFieldTypes.Number;
    comment?: EntryFieldTypes.Text;
    cakeDesign?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeCustomerReviewSkeleton = EntrySkeletonType<TypeCustomerReviewFields, "customerReview">;
export type TypeCustomerReview<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCustomerReviewSkeleton, Modifiers, Locales>;
