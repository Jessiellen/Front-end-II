// import ".App.css";
// import {Greeting} from "./components/Greeting";

// const Greeting = () => {
//     return<div></div>;
// };

type Props = {
    data: {
        name: string;
    };
};

export const Greeting = ({data}: Props) => {
    return<div>Hello {data.name}</div>;
}