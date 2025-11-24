import { Schema } from "mongoose";
declare const PostModelSchema: import("mongoose").Model<{
    title: string;
    content: string;
    createdAt: NativeDate;
    creator?: {
        name: string;
    } | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    title: string;
    content: string;
    createdAt: NativeDate;
    creator?: {
        name: string;
    } | null;
} & import("mongoose").DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    title: string;
    content: string;
    createdAt: NativeDate;
    creator?: {
        name: string;
    } | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    title: string;
    content: string;
    createdAt: NativeDate;
    creator?: {
        name: string;
    } | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    title: string;
    content: string;
    createdAt: NativeDate;
    creator?: {
        name: string;
    } | null;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    title: string;
    content: string;
    createdAt: NativeDate;
    creator?: {
        name: string;
    } | null;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export { PostModelSchema };
//# sourceMappingURL=post.d.ts.map