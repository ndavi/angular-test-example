import { dataSelector } from '../utils/DataSelector';

describe('User form', () => {
  it('should show error if field are empty', () => {
    whenVisitForm();
    thenSubmitForm();

    shouldHasRequiredFieldError();
  });

  it('should show error if password is invalid', () => {
    whenVisitForm();

    populatePasswordField('abc');
    thenSubmitForm();
    shouldHaveInvalidPasswordError();
  });

  it('should show form with no errors', () => {
    whenVisitForm();

    shouldHasValidLabel();
    shouldHasNoError();

    populateUsernameField('usernameValid');
    populatePasswordField('p@sswordValid_');

    thenSubmitForm();
    shouldHasNoError();
  });
});

const whenVisitForm = () => {
  cy.visit('/');
};

const shouldHasValidLabel = () => {
  cy.get(dataSelector('form.username.label')).should('have.text', "Nom d'utilisateur");
  cy.get(dataSelector('form.password.label')).should('have.text', 'Mot de passe');
};

const shouldHasNoError = () => {
  cy.get(dataSelector('form.username.error.username')).should('not.exist');
  cy.get(dataSelector('form.username.error.password')).should('not.exist');
};

const thenSubmitForm = () => {
  cy.get(dataSelector('form.submit.button')).click();
};

const shouldHasRequiredFieldError = () => {
  cy.get(dataSelector('form.username.username.error.required')).should('have.text', "Le nom d'utilisateur est requis");
  cy.get(dataSelector('form.username.password.error.required')).should('have.text', 'Le mot de passe est requis');
  cy.get(dataSelector('form.username.password.error.invalidPassword')).should('not.exist');
};

const populateUsernameField = (value: string) => {
  cy.get(dataSelector('form.username.value')).type(value);
};

const populatePasswordField = (value: string) => {
  cy.get(dataSelector('form.password.value')).type(value);
};

const shouldHaveInvalidPasswordError = () => {
  cy.get(dataSelector('form.username.password.error.invalidPassword')).should('have.text', 'Le mot de passe est invalide');
};
