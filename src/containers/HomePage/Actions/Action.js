// import styles from './Action.module.scss';
import Diagnostic from './Diagnostic';
import RemoteVideo from './RemoteVideo';
import Specialty from './Specialty';
import Facility from './Facility';
import OutstandDoctor from './OutstandDoctor'

function Action() {
    return (
        <div>
            <Diagnostic />
            <RemoteVideo />
            <Specialty />
            <Facility/>
            <OutstandDoctor/>
        </div>
    );
}

export default Action;
