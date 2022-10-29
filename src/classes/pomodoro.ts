export default class Pomodoro {
  private TIMES = {
    focus: 0, 
    break: 0,
    long_break: 0
  }
  private ciclo: number[]
  private ciclo_atual = 0

  constructor(focus_time?: number, break_time?: number, long_break_time?: number) {
    if(!focus_time)
        this.TIMES.focus = 1500
    else
        this.TIMES.focus = focus_time

    if(!break_time)
        this.TIMES.break = 300
    else
        this.TIMES.break = break_time

    if(!long_break_time)
        this.TIMES.long_break = 900
    else
        this.TIMES.long_break = long_break_time

    this.ciclo = [this.TIMES.focus, this.TIMES.break, 
        this.TIMES.focus, this.TIMES.break, 
        this.TIMES.focus, this.TIMES.break, 
        this.TIMES.focus, this.TIMES.long_break]
  }

  public etapa_atual():number {
    const i = (this.ciclo_atual % this.ciclo.length + this.ciclo.length) % this.ciclo.length
    return this.ciclo[i]
  }

  public avanca_etapa():void {
    this.ciclo_atual ++
  }

}
