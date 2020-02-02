class Api::TodosController < ApplicationController

    def index
        # let all_todos = Todo.all
        # going to have tp iterate through all todos, and insert into a 
        # json servable object, do this in the jbuilder index view
        # render json: Todo.all.where(user_id: current_user.id)
    end

    def show
        render json: Todo.find(params[:id])
    end

    def create
        @todo = Todo.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def update
        @todo = Todo.find(params[:id])
        if @todo.update(todo_update_params)
            render json: @todo
        else
            render json: @todo.errors.full_messages, status: 422
        end
    end

    def destroy
        @todo = Todo.find(params[:id])
        @todo.destroy
        render json: @todo
    end

    private

    def todo_params
        params.require(:todo).permit(:title, :body, :done)
    end

    def todo_update_params
        # using this method may cause issues in that it will only record this property
        # and destroy the other properties? not sure but probably best to go with above method
        params.require(:todo).permit(:done)
    end

end
