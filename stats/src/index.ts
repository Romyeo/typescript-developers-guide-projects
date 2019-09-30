import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { HtmlReport } from './reports/HtmlReport';

// Create an 'DataReader'
// const csvFileReader = new CSVFileReader('football.csv');

// Create reader
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// Create summary report
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
