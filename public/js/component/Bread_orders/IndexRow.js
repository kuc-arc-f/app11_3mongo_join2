class IndexRow extends React.Component {
    componentDidMount(){
//        console.log(this.props.obj)
    }
    render(){
console.log(this.props.obj.breads )
        var bread_name = "";
        if(this.props.obj.breads.length > 0){
            bread_name = this.props.obj.breads[0].name ;
        }
        return (
        <tr>
            <td>
                <a href={"/bread_orders/show/"+ this.props.obj._id}><h3>{this.props.obj._id}</h3>
                </a>
                num: {this.props.obj.order_num } ,{this.props.obj.created_at }<br />
                bread : {bread_name}
            </td>
            <td>
            </td>
        </tr>
        )
    }
}

