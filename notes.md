<button onClick={this.openEditModal(list)} className="listEdit">=
let showDetail;

if (this.state.detailId){
  return(
    showDetail = "flex"
  );
} else {
  return(
    showDetail = "none"
  );
}
// <button onClick={this.closeDetail} className="closeButton">Close</button>
</form>
style="display: `${showDetail}`;"

$.ajax({
    type: 'GET',
    url: '/api/tasks',
    data: {task: {list_id: 32}}
})
$.ajax({
    type: 'POST',
    url: 'api/users',
    data: {user: {first_name: 'Jeff',
                  last_name: 'Gronewold',
                  user_name: 'tanktop',
                  password: 'password'}}
})

$.ajax({
  type: 'DELETE',
  url: 'api/session'
})




$.ajax({
  type: 'Get',
  url:'api/lists/1'
  })


   <form>
     <label value="Enter a new list name:">
       <input type="text"
               value={this.state.new_list}
               onChange={this.update("user_name")}
               className="list-input"
               />
     </label>
   </form>


   <form onSubmit={this.handleNewTask}>
     <input type="text"
             value="New task"
             onChange={this.update("title")}
     />
   <input type="submit" value="Add task" />

   </form>

   const doneStatus = {[task.id]: task.done};
   const newState = merge(this.state.done, doneStatus);
   this.setState({done: newState});






   left 433 838
        212 742
