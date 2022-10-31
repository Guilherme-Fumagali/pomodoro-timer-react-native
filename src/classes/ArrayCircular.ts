/* Classe que encapsula o funcionamento de um vetor circular */
export default class ArrayCircular {
  private arr: any[] = []

  constructor(initialValues?: any[]) {
    if (initialValues)
      initialValues.map((element) => {
        this.arr.push(element)
      })
  }

  private getRealIndex(i: number): number {
    return ((i % this.arr.length) + this.arr.length) % this.arr.length
  }

  public getElementAtIndex(i: number): any {
    return this.arr[this.getRealIndex(i)]
  }

  public newValues(values: any[]): void {
    this.arr.splice(0, this.arr.length)
    this.arr.concat(values)
  }
}
