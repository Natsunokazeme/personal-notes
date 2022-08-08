1.spy on will not execute the function you spy on, but will return a jest.fn() object.
2.you can create a mock file for window object.
3. mockReturnValue to return a value as an API.
4. toHaveBeenCalledWith to check if a function was called with certain arguments.
5. toHaveBeenCalledTimes to check if a function was called a certain number of times.
6. toHaveBeenCalled to check if a function was called.
7. create stub to mock the service
8. sy on the actual service to mock the service. such as counterService = TestBed.inject(CounterService);
9. ng-mocks for parent component depends on the child component to work properly.(need to be installed)
import { MockComponent } from 'ng-mocks';

describe('AppComponent', () => {
beforeEach(waitForAsync(() => {
TestBed.configureTestingModule({
imports: [RouterTestingModule],
declarations: [AppComponent,
MockComponent(VersionControlComponent)],
}).compileComponents();
}));
10.VersionControlComponent needs a file to be mocked.
import { MockBuilder, MockedComponentFixture, MockRender
} from 'ng-mocks';
import { ReleaseFormComponent } from '../release-form/
release-form.component';
import { ReleaseLogsComponent } from '../release-logs/
release-logs.component';
import { VersionControlComponent } from './version-
control.component';
describe('VersionControlComponent', () => {
let component: VersionControlComponent;
let fixture: MockedComponentFixture
<VersionControlComponent>;
beforeEach(() => {
return MockBuilder(VersionControlComponent)
.mock(ReleaseFormComponent)
.mock(ReleaseLogsComponent);
});
beforeEach(() => {
fixture = MockRender(VersionControlComponent);
component = fixture.point.componentInstance;
});
it('should create', () => {...});
});
11.jest.useFakeTimers(),jest.runAllTimers() to mock the time executor.
