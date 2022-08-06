// import styles from './Action.module.scss';
import Diagnostic from './Diagnostic';
import RemoteVideo from './RemoteVideo';
import Specialty from './Specialty';
import Facility from './Facility';
import OutstandDoctor from './OutstandDoctor';
import Handbook from './Handbook';
import TheMedia from './TheMedia';
import DownloadApp from './DownloadApp';
import ForDoctor from './ForDoctor';

function Action() {
    return (
        <div>
            <Diagnostic />
            <RemoteVideo />
            <Specialty />
            <Facility />
            <OutstandDoctor />
            <Handbook />
            <TheMedia />
            <DownloadApp />
            <ForDoctor />
        </div>
    );
}

export default Action;
