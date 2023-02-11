namespace CustomFirework {
    export interface Colour {
        fColour: string;
        hColour: string;
        name: string;
    }

    export let colours: { [key: string]: Colour } = {
        "purple": {
            fColour: "hsla(278, 100%, 50%, 1)",
            hColour: "hsla(278, 100%, 50%, 0.5)",
            name: "purple"
        },
        "red": {
            fColour: "hsla(0, 100%, 50%, 1)",
            hColour: "hsla(0, 100%, 50%, 0.5)",
            name: "red"
        },
        "blue": {
            fColour: "hsla(205, 100%, 50%, 1)", 
            hColour: "hsla(205, 100%, 50%, 0.5)",
            name: "blue"
        },
        "green": {
            fColour: "hsla(113, 100%, 50%, 1)",
            hColour: "hsla(113, 100%, 50%, 0.5)",
            name: "green"
        },
        "white": {
            fColour: "hsla(0, 100%, 100%, 1)",
            hColour: "hsla(0, 100%, 100%, 0.5)",
            name: "white"
        }
    };
}