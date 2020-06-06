import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Components
import CPPicker from '../../../components/CPPicker';
import TouchableRipple from '../../../components/TouchableRipple';

// Variables
import styles from './styles';
import ActionTypes from '../../../redux/AuthModule/action';

const genders = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Other', value: 'Other' },
];

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '29 Lê Phụ Trần',
      birthday: moment(),
      // createddate: '2020-05-31',
      // email: 'davidbull931997@gmail.com',
      // fullname: 'Phan Ngọc Lâm',
      gender: genders[0].value,
      // id: 17,
      idCard: '201769663',
      phoneNumber: '0776266985',
    };
  }

  renderFieldItem = (item, index) => {
    const { state } = this;

    const { loading } = this.props;

    const minDate = moment('01-01-1980', 'DD-MM-YYYY').toDate();
    const maxDate = moment().toDate();

    if (item.fieldName === 'birthday') {
      return (
        <View key={index} style={styles.input.container}>
          <Text style={styles.input.title}>{item.title}</Text>
          <DatePicker
            disabled={loading}
            style={styles.input.datepicker}
            date={state[item.fieldName]}
            showIcon={false}
            // iconComponent={iconComponent}
            mode="date"
            locale="vi"
            // placeholder="Tìm từ ngày"
            format="DD / MM / YYYY"
            minDate={minDate}
            maxDate={maxDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              // datePickerCon: { flex: 1 },
              // datePicker: { flex: 1 },
              dateInput: { borderWidth: 0 },
              placeholderText: { color: undefined },
              dateText: { color: undefined, fontWeight: '500' },
            }}
            onDateChange={this.onDateChange}
          />
        </View>
      );
    }

    if (item.fieldName === 'gender') {
      return (
        <View key={index} style={styles.input.container}>
          <Text style={styles.input.title}>{item.title}</Text>
          <View style={[styles.input.textInput, { paddingVertical: 0, paddingRight: 0 }]}>
            <CPPicker
              key={index}
              disabled={loading}
              pickerItems={genders}
              itemLabelFieldName="label"
              itemValueFieldName="value"
              selectedValue={state[item.fieldName]}
              // enabled={submitting === false}
              borderColor="transparent"
              onValueChange={this.onValueChange}
            />
          </View>
        </View>
      );
    }

    return (
      <View key={index} style={styles.input.container}>
        <Text style={styles.input.title}>{item.title}</Text>
        <TextInput
          editable={loading === false}
          value={state[item.fieldName]}
          returnKeyType="next"
          autoCorrect={false}
          placeholder={item.title}
          style={styles.input.textInput}
          onChangeText={this.onChangeText(item.fieldName)}
        />
      </View>
    );
  }

  onValueChange = (value) => {
    this.setState({ gender: value });
  }

  onDateChange = (date) => {
    const birthday = moment(date, 'DD / MM / YYYY');

    this.setState({ birthday });
  }

  onChangeText = (fieldName) => (value) => {
    this.setState({ [fieldName]: value });
  }

  onSubmit = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.updateProfile(this.state);
  }

  render = () => {
    const { loading } = this.props;

    const fields = [
      { fieldName: 'address', title: 'Address' },
      { fieldName: 'birthday', title: 'Date of birth' },
      { fieldName: 'gender', title: 'Gender' },
      { fieldName: 'idCard', title: 'ID card' },
      { fieldName: 'phoneNumber', title: 'Phone number' },
    ];

    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <KeyboardAwareScrollView>
          {fields.map(this.renderFieldItem)}
        </KeyboardAwareScrollView>
        <TouchableRipple
          disabled={loading}
          rippleColor="white"
          rippleOpacity={0.2}
          style={styles.submit.touchable}
          onPress={this.onSubmit}
        >
          {loading === false && <Text style={styles.submit.text}>Submit</Text>}
          {loading && <ActivityIndicator color="white" />}
        </TouchableRipple>
      </React.Fragment>
    );
  }
}

UpdateProfile.propTypes = {
  loading: PropTypes.bool.isRequired,
  updateProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (data) => dispatch({ type: ActionTypes.AUTH_UPDATE_PROFILE, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
