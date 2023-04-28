import type { CommentType} from "~/domain/entity/comments.schema";
import Form from "./comments-form.component";
import CommentsList from "./comments-list.component";

type CommentsListProps = {
    comments: CommentType[];
};

export default function Comments({
    comments,
}: CommentsListProps) {
    return <>
        <Form />
        <CommentsList comments={comments} />
    </>;
};