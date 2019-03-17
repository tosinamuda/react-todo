const List = props => (
    <ul className="ul">
      {props.items.length > 0 ? (
          props.items.map((item, index) => (
            <div className="card" key={index}>
                <li>
                    <p className="todo-title">{item}</p>
                    <span className="action-btn" onClick={() => { props.removeTodo(item, index)}} key={index}>Done</span>
                </li>
            </div>

        ))
        ) : (
            <p>Nothing todo. Add some.</p>
        )}
          <style jsx>{`
      .action-btn {
        font-size: 12px;
        opacity: 0.5;
        cursor: pointer;
      }
      .todo-title {
        font-size: 27px;
        margin: 0;
        opacity: 0.8;
      }
      .card {
        min-height: 50px;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
        background: white;
        margin-bottom: 15px;
      }
      .ul {
        list-style: none;
        padding-left: 0;
        font-size: 23px;
        max-height: 68vh;
        overflow: scroll;
        padding: 0 10px;
        margin: 0 -10px;
        margin-top: 25px;
      }
      @media screen and (orientation: landscape) {
        .ul {
          max-height: 50vh;
        }
      }
      .button {
        margin-right: 5px;
      }
      .flex-list {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
    `}</style>
    </ul>
  );

  export default List;