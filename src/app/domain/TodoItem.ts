export class TodoItem {
  id: number;
  name: string;
  state: boolean;
  constructor(name?: string, id?: number, state?: boolean) {
    this.name = name;
    this.id = id;
    this.state = state;
  }
}
