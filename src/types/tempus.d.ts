declare module 'tempus' {
  type TempusCallback = (
    time: number,
    deltaTime: number,
    frameCount: number,
  ) => void;
  type TempusOptions = {
    priority?: number;
    fps?: number | string;
    label?: string;
    idle?: number;
  };
  type UID = number;
  class TempusImpl {
    add(
      callback: TempusCallback,
      options?: TempusOptions,
    ): (() => void) | undefined;

    play(): void;

    pause(): void;

    get isPlaying(): boolean;
  }
  const Tempus: TempusImpl;
  export default Tempus;
}
