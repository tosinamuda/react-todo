import React from 'react'
import List from '../components/List'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';

class Index extends React.Component {

    /* static async getInitialProps(){
        const res = await fetch('http://localhost:3000/api/data')
        const initialTodotodoList = await res.json()

        console.log(`Show data fetched. Count: ${initialTodotodoList.length}`)

        return { initialTodotodoList}
    } */

 

    constructor(props) {
      super(props);
      this.state = {
        todoItem: '',
        todoList: [],
        error: null,
        isLoaded: false
      };
      this.removeTodo = this.removeTodo.bind(this);
    }
     

    componentDidMount() {
        fetch('http://localhost:3000/api/data')
          .then(res => res.json())
          .then(
              (result) => { this.setState({  isLoaded: true, todoList: result });},
              (error) => { this.setState({ isLoaded: true, error });}
            )
      }

    onChange = (event) => {
        this.setState({ todoItem: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        if(this.state.todoItem.length > 0)
            this.setState({
            todoItem: '',
            todoList: [...this.state.todoList, this.state.todoItem]
            });
      }

      removeTodo(name, i){
          let todoList = this.state.todoList.slice(); //return a new copy of the Array
          todoList.splice(i, 1); //Remove item at index i;
          this.setState({todoList});
    }
  
    render() {


        const {todoItem, todoList, error, isLoaded} = this.state;
        if (error)
            return (<Layout><div>Error: {error.message}</div></Layout>)
        else if(!isLoaded)
            return (<Layout><div>Loading...</div></Layout>)
        else
        
        return (
            
            <Layout>
                <form className="form" onSubmit={this.onSubmit}>
                    <input className="input" type="text" value={this.state.todoItem} onChange={this.onChange} placeholder="Type and press enter" />
                </form>
                <List todoList={this.state.todoList} removeTodo={this.removeTodo}/>
                <style jsx>{`
                    .form {
                        display: flex;
                    }
                    input {
                        outline: none;
                    }

                    .input {
                        width: 100%;
                        font-size: 20px;
                        font-family: "Montserrat", sans-serif;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
                        border: none;
                        height: 45px;
                        padding: 5px 10px;
                        border-radius: 10px;
                    }
                    :global(.button) {
                        font-size: 23px;
                        margin-left: 5px;
                        background: none;
                        cursor: pointer;
                    }
                `}
                </style>
            </Layout>
      );
    }
  }

export default Index