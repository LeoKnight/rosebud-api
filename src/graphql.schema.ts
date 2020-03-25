
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateDiscussInput {
    content?: string;
    articleId?: string;
}

export class Discuss {
    id?: string;
    content?: string;
    articleId?: string;
    createTime?: Date;
    updateTime?: Date;
    reply?: Discuss[];
}

export abstract class IMutation {
    abstract createDiscuss(createDiscussInput?: CreateDiscussInput): Discuss | Promise<Discuss>;

    abstract reply(id: string, createDiscussInput?: CreateDiscussInput): Discuss | Promise<Discuss>;
}

export abstract class IQuery {
    abstract getDiscuss(): Discuss[] | Promise<Discuss[]>;

    abstract discuss(id: string): Discuss | Promise<Discuss>;
}
