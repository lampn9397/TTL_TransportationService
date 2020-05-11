/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Picker,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import {
  Header,
  Body,
  Left,
  Right,
  Button,
  Title,
  Icon as NBIcon,
  Picker as NBPicker,
} from 'native-base';
// Components

// Stylesheet
import styles from './styles';

// Variables

class CPPicker extends React.Component {
  constructor(props) {
    super(props);
    this.initialize();
  }

  UNSAFE_componentWillMount = () => {
    if (Platform.OS === 'android') {
      // this._addAndroidPickerHolder();
    }
  }

  UNSAFE_componentWillReceiveProps = (props) => {
    this.mapPropsToState(props);
  }

  initialize = () => {
    // STATES
    const {
      enabled,
      placeholder,
    } = this.props;

    this.state = {
      enabled,
      iosSelectedLabel: placeholder,
    };

    this.androidSelectedValue = -1;
  }

  addAndroidPickerHolder = () => {
    const {
      pickerItems,
      placeholder,
      itemLabelFieldName,
      itemValueFieldName,
    } = this.props;

    const placeholderItem = {};

    placeholderItem[itemLabelFieldName] = placeholder;

    placeholderItem[itemValueFieldName] = -1;

    if (pickerItems.findIndex((x) => x[itemLabelFieldName] === placeholder) === -1) {
      pickerItems.unshift(placeholderItem);
    }
  };

  mapPropsToState = (props) => {
    /*
      enabled : true
      iosClosePicker : ƒ ()
      iosOpenPicker : ƒ ()
      iosSubmitPicker : ƒ ()
      iosVisible : false
      itemLabelFieldName : "StudentName"
      itemValueFieldName : "StudentId"
      onValueChange : ƒ (platform, studentId, index)
      pickerItems : (3) [{…}, {…}, {…}]
      placeholder : "-- Chọn học viên"
      selectedValue : 11147806
  */

    const {
      enabled,
      pickerItems,
      itemValueFieldName,
      itemLabelFieldName,
    } = props;

    let selectedItem = {};

    const stateModel = {};

    for (let i = 0; i < pickerItems.length; i++) {
      if (pickerItems[i][itemValueFieldName] === props.selectedValue) {
        selectedItem = pickerItems[i];
        break;
      }
    }

    stateModel.iosSelectedLabel = selectedItem[itemLabelFieldName];
    stateModel.enabled = enabled;
    this.setState(stateModel);
  };

  // IOS
  iosOpenPicker = () => {
    const { enabled } = this.state;
    if (enabled === false) return;

    const { pickerItems, itemLabelFieldName } = this.props;
    const sheetOptions = [];
    pickerItems.forEach((item) => {
      sheetOptions.push(item[itemLabelFieldName]);
    });
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: sheetOptions,
      },
      this.iosSubmitPicker,
    );
  };

  iosSubmitPicker = (actionIndex) => {
    const { pickerItems, itemValueFieldName, onValueChange } = this.props;
    const selectedValue = pickerItems[actionIndex][itemValueFieldName];
    const selectedIndex = actionIndex;
    onValueChange(selectedValue, selectedIndex);
  };

  // ANDROID
  androidOnValueChange = (value, index) => {
    const { pickerItems, itemValueFieldName, onValueChange } = this.props;
    let selectedValue = value;
    const selectedIndex = index;
    if (this.androidSelectedValue !== selectedValue) {
      if (this.androidSelectedValue === -1) {
        // IF SELECTED VALUE IS NOT PLACEHOLDER VALUE
        // pickerItems.splice(0, 1);
        // selectedIndex = selectedIndex - 1;
        selectedValue = pickerItems[selectedIndex][itemValueFieldName];
      }
      this.androidSelectedValue = selectedValue;
      onValueChange(selectedValue, selectedIndex);
    }
  };

  renderHeader = (backAction) => {
    const { iosHeader } = this.props;
    return (
      <Header>
        <Left>
          <Button transparent onPress={backAction}>
            <NBIcon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title>{iosHeader}</Title>
        </Body>
        <Right />
      </Header>
    );
  };

  render = () => {
    const {
      // iosVisible,
      pickerItems,
      selectedValue,
      // iosOpenPicker,
      enabled,
      // iosClosePicker,
      // iosHeader,
      // iosSubmitPicker,
      itemLabelFieldName,
      itemValueFieldName,
      onValueChange,
      borderColor,
      textStyle,
    } = this.props;
    // console.log(pickerItems);
    // ANDROID
    if (Platform.OS === 'android') {
      return (
        <View style={styles.android.container}>
          <Picker enabled={enabled} mode="dropdown" selectedValue={selectedValue} onValueChange={this.androidOnValueChange}>
            {pickerItems.map((item, index) => (
              <Picker.Item key={index} label={item[itemLabelFieldName]} value={item[itemValueFieldName]} />
            ))}
          </Picker>
        </View>
      );
    }
    // IOS

    const enabledColor = enabled ? '#4a8bfc' : '#d5d5d5';
    return (
      <NBPicker
        enabled={enabled}
        selectedValue={selectedValue}
        placeholderIconColor={enabledColor}
        renderHeader={this.renderHeader}
        iosIcon={<NBIcon name="arrow-down" style={{ color: enabled ? undefined : enabledColor }} />}
        style={[styles.ios.placeholder_Container, { borderColor: borderColor || enabledColor }]}
        textStyle={[{ flex: 1, paddingLeft: 0, paddingRight: 0 }, textStyle]}
        onValueChange={onValueChange}
      >
        {pickerItems.map((item, index) => (
          <NBPicker.Item key={index} label={item[itemLabelFieldName]} value={item[itemValueFieldName]} />
        ))}
      </NBPicker>
    );
  };
}

CPPicker.propTypes = {
  enabled: PropTypes.bool,
  iosHeader: PropTypes.string,
  borderColor: PropTypes.string,
  placeholder: PropTypes.string,
  textStyle: PropTypes.instanceOf(Object),
  itemValueFieldName: PropTypes.string.isRequired,
  itemLabelFieldName: PropTypes.string.isRequired,
  pickerItems: PropTypes.instanceOf(Array).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  onValueChange: PropTypes.func.isRequired,
};

CPPicker.defaultProps = {
  iosHeader: '',
  textStyle: {},
  enabled: true,
  placeholder: '',
  borderColor: 'black',
};

export default CPPicker;
