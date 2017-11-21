export const setSpecimenWizardPage = (page) => {
    return {
        type: 'SET_SPECIMEN_WIZARD_PAGE',
        page: page
    }
}

export const nextWizardPage = () => {
    return {
        type: 'NEXT_INS_SPEC_WIZARD_PAGE'
    }
}
