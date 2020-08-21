export class Post {
    constructor(
        public content: string,
        public created_at: Date,
        public id: number,
        public title: string
    ) {}
}
