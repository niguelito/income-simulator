export default class AppEvents {
    private static listeners: { [key: string]: Function[] } = {};

    public static addListener(event: string, callback: Function): void {
        if (this.listeners[event] == null) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);

        console.log("Added listener for event: " + event + "!");
    }

    public static removeListener(event: string, callback: Function): void {
        if (this.listeners[event] == null) {
            return;
        }

        this.listeners[event] = this.listeners[event].filter(l => l !== callback);

        console.log("Removed listener for event: " + event + "!");
    }

    public static emit(event: string, ...args: any[]): void {
        if (this.listeners[event] == null || this.listeners[event].length == 0) {
            console.log("No listeners for event: " + event +"!");
            return;
        }

        let ranListeners = 0;

        this.listeners[event].forEach(l => {
            l(...args);
            ranListeners++;
        });

        console.log("Ran " + ranListeners + " event listeners");
    }
}