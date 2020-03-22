
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateCatInput {
    name?: string;
    age?: number;
}

export class CreateDiscussInput {
    content?: string;
    articleId?: string;
}

export class Cat {
    id?: number;
    name?: string;
    age?: number;
}

export class Discuss {
    id?: number;
    content?: string;
    articleId?: string;
    reply?: Discuss[];
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;

    abstract createDiscuss(createDiscussInput?: CreateDiscussInput): Discuss | Promise<Discuss>;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract cat(id: string): Cat | Promise<Cat>;

    abstract getDiscuss(): Discuss[] | Promise<Discuss[]>;

    abstract discuss(id: string): Discuss | Promise<Discuss>;
}

export abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;
}
