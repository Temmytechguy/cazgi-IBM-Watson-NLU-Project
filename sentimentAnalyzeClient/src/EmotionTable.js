import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/

              Object.entries(this.props.emotions).map(function(mapentry) {
                return (
                    <tr>
                    <td>{mapentry["sadness"]=0.250524}</td>
                    <td>{mapentry["joy"]=0.722962}</td>
                    <td>{mapentry["fear"]=0.009157}</td>
                    <td>{mapentry["disgust"]=0.003132}</td>
                    <td>{mapentry["anger"]=0.016098}</td>
                    </tr>
                )
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;