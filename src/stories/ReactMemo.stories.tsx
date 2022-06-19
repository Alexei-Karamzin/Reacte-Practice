import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export const Container = () => {
  console.log('render container component')
  let [count, setCount] = useState(0)
  let [users, setUsers] = useState(['Alex', 'Sasha', 'Tim', 'Bobbe'])

  const incCount = () => {
    setCount(++count)
  }

  return <div>
    <Counter count={count} incCount={incCount}/>
    <Users users={users}/>
  </div>
}

export const Counter = React.memo((props: {count: number, incCount: ()=>void}) => {
  console.log('render Counter component')
  return <div>
    <button onClick={props.incCount}>inc count</button>
    {props.count}
  </div>
})

export const Users = React.memo((props: {users: Array<string>}) => {
  console.log('render Users component')
  return <div>
    <div>Title of users: </div>
    {props.users.map((u,i) => <div key={i}>{u}</div>)}
  </div>
})


export default {
  title: 'Control Element/ReactMemo demo',
  component: Container,
  args: {

  }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container /*{...args}*//>;

export const ControlSelectStory = Template.bind({});

ControlSelectStory.args = {

};
