import * as React from "react";
interface IProps {
  name: string;
  count: number;
};
interface IState {
  count: number;
};
export class Boo extends React.Component<IProps, IState> {
  timer: ReturnType<typeof setTimeout>;

  constructor(props: IProps) {
    super(props);
    this.state = {count: props.count};
  }

  countIncreaceAuto() {
    this.timer = setTimeout(() => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
      this.countIncreaceAuto();
    }, 1000);
  }

  componentDidMount(): void {
    this.countIncreaceAuto();
  }

  componentWillUnmount(): void {
    clearTimeout(this.timer);
  }

  render() {
    return (<div>
      <span>{ this.props.name }</span>
      <span>{ this.state.count }</span>
    </div>);
  }
};
