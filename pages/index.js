import React from 'react'
import List from '../components/List'
import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
    static async getInitialProps(){
        const res = await fetch('http://localhost:3000/api/data')
        const initialData = await res.json()

        console.log(`Show data fetched. Count: ${initialData.length}`)


        return {

            initialTodo: initialData
        }
    }

    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: props.initialTodo
      };
      this.removeTodo = this.removeTodo.bind(this);
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }

      removeTodo(name, i){
          let items = this.state.items.slice(); //return a new copy of the Array
          items.splice(i, 1); //Remove item at index i;
          this.setState({items});
    }
  
    render() {
      return (
        <div className="container">
            <div className="content">
                <h1 className="title">Enye-Todo</h1>
                <form className="form" onSubmit={this.onSubmit}>
                    <input className="input" type="text" value={this.state.term} onChange={this.onChange} placeholder="Type and press enter" />
                    
                </form>
                <List items={this.state.items} removeTodo={this.removeTodo}/>
            </div>
            <style jsx>{`
          :global(body) {
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, #c900ff, #6e00ff) no-repeat;
            font-family: "Montserrat", sans-serif;
          }
          .title {
            margin-top: 0;
          }
          .form {
            display: flex;
          }
          input {
            outline: none;
          }
          .container {
            width: 100vw;
            height: 100vh;
            margin-top: 25px;
            margin-bottom: 25px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          .content {
            background: #f9f9f9;
            padding: 15px;
            width: 500px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            height: 90vh;
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
          @media (max-width: 600px) {
            .content {
              width: 88%;
            }
          }
        `}</style>
        </div>
      );
    }
  }

export default Index