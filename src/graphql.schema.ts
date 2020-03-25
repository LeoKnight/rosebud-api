
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
    id?: number;
    content?: string;
    articleId?: string;
    reply?: Discuss[];
}

export abstract class IMutation {
    abstract createDiscuss(createDiscussInput?: CreateDiscussInput): Discuss | Promise<Discuss>;
}

export abstract class IQuery {
    abstract getDiscuss(): Discuss[] | Promise<Discuss[]>;

    abstract discuss(id: string): Discuss | Promise<Discuss>;
}
