import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeIngredientFields {
    name?: EntryFieldTypes.Text;
    allergens?: EntryFieldTypes.Text;
    vegan?: EntryFieldTypes.Boolean;
    glutenFree?: EntryFieldTypes.Boolean;
}

export type TypeIngredientSkeleton = EntrySkeletonType<TypeIngredientFields, "ingredient">;
export type TypeIngredient<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeIngredientSkeleton, Modifiers, Locales>;
