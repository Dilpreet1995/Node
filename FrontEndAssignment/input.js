var StatusEnums= {
    Active: "Active", Complete: "Complete", Deleted: "Deleted"
};

    var TodoList={
    1:{Title:"First Todo",Status:StatusEnums.Active},
    2:{Title:"Second Todo",Status:StatusEnums.Active},
    3:{Title:"Third Todo",Status:StatusEnums.Active},
    4:{Title:"Fourth Todo",Status:StatusEnums.Active},
    5:{Title:"Fifth Todo",Status:StatusEnums.Active},
        6:{Title:"Sixth Todo",Status:StatusEnums.Active}

};

    var NextTodo=7;



    module.exports={StatusEnums:StatusEnums,TodoList:TodoList,NextTodo:NextTodo};