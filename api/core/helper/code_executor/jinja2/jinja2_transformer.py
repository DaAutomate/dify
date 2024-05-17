from textwrap import dedent

from core.helper.code_executor.python3.python3_transformer import Python3TemplateTransformer
from core.helper.code_executor.template_transformer import TemplateTransformer


class Jinja2TemplateTransformer(TemplateTransformer):
    @classmethod
    def get_standard_packages(cls) -> set[str]:
        return {'jinja2'} | Python3TemplateTransformer.get_standard_packages()

    @classmethod
    def transform_response(cls, response: str) -> dict:
        """
        Transform response to dict
        :param response: response
        :return:
        """
        return {
            'result': cls.extract_result_str_from_response(response)
        }

    @classmethod
    def get_runner_script(cls) -> str:
        runner_script = dedent(f"""
            import jinja2
            import json
            from base64 import b64decode
            
            template = jinja2.Template('''{cls._code_placeholder}''')
            
            def main(**inputs):
                return template.render(**inputs)
            
            # execute main function, and return the result
            inputs = b64decode('{cls._inputs_placeholder}').decode('utf-8')
            output = main(**json.loads(inputs))
            
            result = f'''<<RESULT>>{{output}}<<RESULT>>'''
            
            print(result)
            
            """)
        return runner_script

    @classmethod
    def get_preload_script(cls) -> str:
        preload_script = dedent("""
            import jinja2
            from base64 import b64decode
            
            def _jinja2_preload_():
                # prepare jinja2 environment, load template and render before to avoid sandbox issue
                template = jinja2.Template('{{s}}')
                template.render(s='a')
            
            if __name__ == '__main__':
                _jinja2_preload_()
            
            """)

        return preload_script
