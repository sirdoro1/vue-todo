Vue.component('todo-item',{
  template:`<li class="list-group-item mt-1 border rounded">
              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                    <span class="col-xs-6 col-md-6">{{task.title}}</span>
                    <span class="pull-right col-xs-6 col-md-6 xs-mt-4 text-right">
                      <i class="fa fa-eye mr-2 text-secondary" @click="viewTask"></i>
                      <i class="fa fa-check mr-2 text-success" @click="$emit('complete',index)"></i>
                      <i class="fa fa-trash text-danger"  @click="$emit('delete',index)"></i>
                    </span>
                  </div>
                </div>
                <div class="col-md-12 border-top mt-3" v-show="showTask">
                  <div class="row">
                    <span class="col-md-12 mt-2">{{task.message}}</span>
                  </div>
                </div>
              </div>
            </li>`,
  props:['task','tasks','index'],
  data:function(){
    return {
      showTask:false,
    }
  },
  methods:{
    viewTask:function(){
      this.showTask = !this.showTask
    },
  }
})

var app = new Vue({
  el:'#app',
  data:{
    tasks:[
      // {id:1,title:'hellooo',message:'This is an hello message'},

    ],
    doneTasks:[],
    title:'',
    message:'',
    nextId:0,
    error:'',
    hasError:false,
    showTask:false,
  },
  methods:{
    viewTask:function(){
      this.showTask = !this.showTask
    },
    deleteTask:function(index){
      this.tasks.splice(index, 1)
    },
    deleteDoneTask:function(index){
      this.doneTasks.splice(index, 1)
    },
    completeTask:function(index){
      this.doneTasks.push(this.tasks[index])
      this.deleteTask(index)
    },
    viewDetails:function(){
      this.viewDetails = !this.viewDetails
    },
    addTask:function(){
      if(this.title!='' && this.message != ''){
          this.tasks.push({
            id:this.nextId++,
            title:this.title,
            message:this.message
          });
          this.title='';
          this.message='';
          this.error = '';
          this.hasError = false;
      }else{
        this.error = "Check the title or details for empty inputs";
        this.hasError = true;
      }
    }

  },
  computed:{
  }
});
