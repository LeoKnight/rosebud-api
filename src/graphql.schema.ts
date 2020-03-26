
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateDiscussInput {
    content?: string;
    articleId?: string;
    replyId?: string;
    isHtml?: boolean;
    deleted?: boolean;
}

export class Discuss {
    id?: string;
    articleId?: string;
    replyId?: string;
    reply?: string[];
    replyEtities?: Discuss[];
    isHtml?: boolean;
    deleted?: boolean;
    content?: string;
    createTime?: Date;
    updateTime?: Date;
}

export abstract class IMutation {
    abstract createDiscuss(createDiscussInput?: CreateDiscussInput): Discuss | Promise<Discuss>;

    abstract reply(id: string, createDiscussInput?: CreateDiscussInput): Discuss | Promise<Discuss>;
}

export abstract class IQuery {
    abstract getDiscuss(): Discuss[] | Promise<Discuss[]>;

    abstract discuss(id: string): Discuss | Promise<Discuss>;
}
