import {startStep, endStep} from '@wdio/allure-reporter';
import allure from '@wdio/allure-reporter';

//Function to attach screenshots in step
export async function attachScreenshot(filename) {
  const png = await browser.takeScreenshot()
  allure.addAttachment(filename, Buffer.from(png, 'base64'), 'image/png')
}

export const allureStep = async (stepname, func) => {
  try {
    startStep(stepname)
    const result = await func()
    endStep()
    return result
  } catch (error) {
    endStep("failed")
    throw error
  }
};