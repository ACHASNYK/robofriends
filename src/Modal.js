const Modal = (props) => {
    if (!props.show) {
     return null
    }
    return ( 
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Create new DmyLeBot!</h3>
                </div>
                <div className="modal-body">
                    
                Нашкробайте імя Bota
                    
                        
                </div>  
                    
                <div className="modal-footer">
                        <button className="button">Вагонь!!</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Modal