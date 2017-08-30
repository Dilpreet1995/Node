var StatusEnums= {
    Active: "Active", Complete: "Complete", Deleted: "Deleted"
};

    var TodoList={
    1:{Title:"First Todo",Status:StatusEnums.Active},
    2:{Title:"Second Todo",Status:StatusEnums.Complete},
    3:{Title:"Third Todo",Status:StatusEnums.Complete},
    4:{Title:"Fourth Todo",Status:StatusEnums.Deleted},
    5:{Title:"Fifth Todo",Status:StatusEnums.Deleted},
        6:{Title:"Sixth Todo",Status:StatusEnums.Complete}

};

    var NextTodo=7;


var i=1;
var Activated={};
var Completed={};
var Deleted={};
while(i<NextTodo)
{
    if (TodoList[i].Status == "Active") {
        Activated[i] =TodoList[i] ;
i++;
    }
    else if(TodoList[i].Status == "Complete")
    {
        Completed[i]=TodoList[i];
        i++;
    }
    else if(TodoList[i].Status == "Deleted")
    {
        Deleted[i]=TodoList[i];
        i++;
    }
    else
    i++;
}
console.log(Activated);
console.log(Completed);
console.log(Deleted);

    module.exports={StatusEnums:StatusEnums,TodoList:TodoList,NextTodo:NextTodo,ActivatedList:Activated,Completed:Completed,Deleted:Deleted};