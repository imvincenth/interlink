class Api::ConnectionsController < ApplicationController

  def create
    @connection = Connection.new(connection_params)

    if @connection.save
      render :show
    else
      render json: @connection.errors.full_messages, status: 422
    end
  end

  def index
    # @connections = Connection.find_by(connectee_id: params[:connectee_id], connector_id: params[:connector_id])
    @connections = Connection.all
    render :index
  end

  def update
    @connection = Connection.find_by(id: params[:id])
    if @connection && @connection.update(connection_params)
      render :show
    else
      render json: @connection.errors.full_messages, status: 422
    end
  end

  def destroy
    @connection = Connection.find_by(id: params[:id])
    if @connection
      @connection.destroy
    end
  end

  private
  def connection_params
    params.require(:connection).permit(:status, :connector_id, :connectee_id)
  end
end
