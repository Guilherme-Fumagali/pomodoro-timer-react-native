import ArrayCircular from "./ArrayCircular"

export default class Pomodoro {
  private TIMES = {
    focus: 0,
    break: 0,
    long_break: 0,
  }
  private ciclo: ArrayCircular
  private ciclo_atual = 0
  private break_count = 0

  constructor(
    focus_time?: number,
    break_time?: number,
    long_break_time?: number
  ) {
    if (!focus_time) this.TIMES.focus = 1500
    else this.TIMES.focus = focus_time

    if (!break_time) this.TIMES.break = 300
    else this.TIMES.break = break_time

    if (!long_break_time) this.TIMES.long_break = 900
    else this.TIMES.long_break = long_break_time

    this.ciclo = new ArrayCircular([
      this.TIMES.focus,
      this.TIMES.break,
      this.TIMES.focus,
      this.TIMES.break,
      this.TIMES.focus,
      this.TIMES.break,
      this.TIMES.focus,
      this.TIMES.long_break,
    ])
  }

  public tempo_etapa_atual(): number {
    return this.ciclo.getElementAtIndex(this.ciclo_atual)
  }

  public avanca_etapa(): void {
    this.ciclo_atual++

    if(this.break_count == 4){
      this.break_count = 0
      return
    }
    const tempo = this.tempo_etapa_atual()
    if(tempo == this.TIMES.break || tempo == this.TIMES.long_break)
      this.break_count++
  }

  public getBreakCount() {
    return this.break_count
  }
}
