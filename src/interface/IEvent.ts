interface IEvent {
  on(event: string, callback: () => void): void
  trigger(event: string): void
}

export default IEvent
