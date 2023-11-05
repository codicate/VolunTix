import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';

export default function Stepper({
  steps,
  components,
  submit,
}: {
  steps: string[];
  components: (() => React.JSX.Element)[];
  submit: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <View style={styles.screen}>
      <View style={styles.stepper}>
        {steps.map((step, i) => {
          const isCurrentStep = i === currentStep;
          const isLastStep = i === steps.length - 1;
          return (
            <View key={step} style={!isLastStep && styles.step}>
              <Text
                style={{
                  color: isCurrentStep ? 'black' : 'gray',
                  fontWeight: isCurrentStep ? 'bold' : 'normal',
                }}
              >
                {step}
              </Text>
              {!isLastStep && <View style={styles.line}></View>}
            </View>
          );
        })}
      </View>
      <View style={{ flexDirection: 'column', gap: 300, alignItems: 'center' }}>
        <View>{components[currentStep]()}</View>
        <View style={styles.buttonGroup}>
          <Button
            type="clear"
            style={styles.button}
            onPress={() => {
              if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
              }
            }}
          >
            <Icon size={20} name="chevron-left" color="black" />
            <Text style={{ color: 'black', fontSize: 20 }}>Back</Text>
          </Button>
          <Button
            type="clear"
            style={styles.button}
            onPress={() => {
              if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
              } else {
                submit();
              }
            }}
          >
            <Text style={{ color: 'black', fontSize: 20 }}>
              {currentStep === steps.length - 1 ? 'Done' : 'Next'}
            </Text>
            <Icon size={20} name="chevron-right" color="black" />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    width: 400,
    marginVertical: 50,
    marginHorizontal: 'auto',
  },
  buttonGroup: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  stepper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: 'gray',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    height: 50,
    gap: 10,
    fontSize: 25,
  },
  button: {
    width: 80,
  },
});
